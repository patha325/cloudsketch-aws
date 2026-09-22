# CloudSketch AWS

A dependency-free browser application written in HTML, CSS and JavaScript. Version 0.3 exports Terraform, TypeScript AWS CDK and CloudFormation YAML, estimates monthly AWS costs, and performs design-time Well-Architected checks while keeping AWS credentials out of the browser. Python is not an application dependency; the documented Python command only starts a convenient local static-file server.

## Accelerators

- **AWS Lakehouse** — an AWS-native alternative pattern to a Databricks-style lakehouse, using S3, Glue, Lake Formation, EMR Serverless, Athena, Redshift Serverless, SageMaker and QuickSight.
- **File-grounded LLM Chat** — authenticated file upload and RAG chat using S3, Lambda, Bedrock Knowledge Bases and OpenSearch Serverless.
- **Multi-agent Report Factory** — Bedrock supervisor and specialist agents analyse structured and unstructured data, write and review reports, then publish them to S3.

These are editable architecture starting points. IaC exporters emit complete resources where the generator has coverage; newer services currently remain visual architecture components until their production-specific IAM, networking and account settings are configured.

## Cost and Well-Architected review

The review panel provides transparent monthly usage assumptions and heuristic findings across all six AWS Well-Architected pillars. Configure an HTTPS server-side pricing endpoint to replace fallback assumptions with rates resolved through the AWS Price List Query or Bulk API. The browser never receives AWS credentials. The endpoint accepts `{ region, resources }` and returns `{ currency, source, total, items }`.

Estimates exclude taxes, support, data transfer, negotiated discounts, Savings Plans and many service-specific dimensions. They are suitable for early comparison, not billing forecasts. The Well-Architected score is a design-time aid and does not replace the AWS Well-Architected Tool or a formal workload review.

## Run

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`. Drag services onto the canvas, choose **Connect**, click a source and target, validate, then export code.

## Verify and deploy

Run `npm test` in this folder. For Terraform, download `main.tf`, then run `terraform init`, `terraform plan`, and only after review, `terraform apply`. For CDK, place the generated stack in a standard CDK TypeScript project, run `cdk synth`, inspect the CloudFormation template, then run `cdk deploy`.

Generated code is a starting point, not a security review. Validate IAM, networking, encryption, backups, naming, quotas, and cost before deployment.

## Design principles

- Diagram JSON is the source of truth.
- Generation is deterministic and testable.
- Validation runs before deployment.
- Deployment stays explicit; the app does not collect AWS credentials.

## Roadmap

- [x] Terraform and TypeScript AWS CDK export
- [x] CloudFormation YAML export
- [x] Separate editable architecture accelerators
- [x] Typed dependency and deployment-readiness validation
- [x] AWS Price List API proxy support and transparent fallback estimates
- [x] Well-Architected checks across all six pillars
- [ ] Expand IaC coverage for Bedrock, OpenSearch Serverless, Redshift Serverless and Step Functions
- [ ] Add nested VPC/subnet visual containers and typed connection ports
- [ ] Import from Terraform state or CloudFormation
- [ ] Add reviewed deployment pipelines
