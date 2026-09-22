export const PILLARS=['Operational Excellence','Security','Reliability','Performance Efficiency','Cost Optimization','Sustainability'];
const has=(g,t)=>g.nodes.some(n=>n.type===t),count=(g,t)=>g.nodes.filter(n=>n.type===t).length;
export function reviewArchitecture(g){const f=[],add=(pillar,severity,title,detail)=>f.push({pillar,severity,title,detail});
 if(!has(g,'cloudwatch'))add(PILLARS[0],'high','No centralized observability','Add CloudWatch logs, metrics, alarms and operational dashboards.');
 if(!has(g,'eventbridge')&&!has(g,'step_functions'))add(PILLARS[0],'medium','Operational workflows are implicit','Model automation, failure handling and operational events.');
 if(!has(g,'cognito')&&has(g,'apigw'))add(PILLARS[1],'high','API authentication is not modeled','Add Cognito or another explicit identity control.');
 if(has(g,'s3')&&!has(g,'iam_role'))add(PILLARS[1],'medium','Least-privilege access is not modeled','Add workload roles and scoped bucket policies.');
 if((has(g,'rds')||has(g,'ec2'))&&count(g,'subnet')<2)add(PILLARS[2],'high','Single-subnet dependency','Use multiple Availability Zones and model recovery behavior.');
 if(has(g,'lambda')&&!has(g,'sqs')&&!has(g,'step_functions'))add(PILLARS[2],'medium','No asynchronous failure buffer','Consider queues, retries, idempotency and dead-letter handling.');
 if(has(g,'ec2'))add(PILLARS[3],'medium','Static compute sizing','Validate instance family, autoscaling and workload profile.');
 if(has(g,'bedrock')&&!has(g,'bedrock_kb'))add(PILLARS[3],'low','No retrieval layer','Consider managed retrieval when grounding improves response quality.');
 if(has(g,'ec2')||has(g,'rds'))add(PILLARS[4],'medium','Always-on resources detected','Record utilization assumptions and compare serverless or scheduled operation.');
 if(!g.nodes.some(n=>n.props?.budget))add(PILLARS[4],'low','No budget assumption recorded','Attach expected usage or budget metadata to cost-driving resources.');
 if(has(g,'ec2')||has(g,'rds')||has(g,'redshift_serverless'))add(PILLARS[5],'medium','Utilization is not evidenced','Right-size and scale down idle capacity to reduce resource consumption.');
 if(!g.nodes.some(n=>n.props?.retentionDays)&&has(g,'s3'))add(PILLARS[5],'low','Data lifecycle is not modeled','Add retention and lifecycle policies for stored data.');
 const scores=Object.fromEntries(PILLARS.map(p=>{const risks=f.filter(x=>x.pillar===p).reduce((s,x)=>s+({high:25,medium:15,low:8}[x.severity]),0);return[p,Math.max(0,100-risks)]}));return{findings:f,scores,overall:Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/PILLARS.length)}}
