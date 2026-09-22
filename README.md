# CloudSketch AWS

A browser-based, AWS-aware architecture canvas that turns diagrams into infrastructure as code. Version 0.1 exports Terraform and TypeScript AWS CDK and keeps AWS credentials out of the browser.

## Accelerators

- **AWS Lakehouse** — an AWS-native alternative pattern to a Databricks-style lakehouse, using S3, Glue, Lake Formation, EMR Serverless, Athena, Redshift Serverless, SageMaker and QuickSight.
- **File-grounded LLM Chat** — authenticated file upload and RAG chat using S3, Lambda, Bedrock Knowledge Bases and OpenSearch Serverless.
- **Multi-agent Report Factory** — Bedrock supervisor and specialist agents analyse structured and unstructured data, write and review reports, then publish them to S3.

These are editable architecture starting points. IaC exporters emit complete resources where the generator has coverage; newer services currently remain visual architecture components until their production-specific IAM, networking and account settings are configured.

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

## Next milestones

1. Complete CDK parity and CloudFormation YAML export.
2. Nested VPC/subnet visual containers and ports with typed connection rules.
3. AWS Pricing API estimates and Well-Architected checks.
4. Import from Terraform state or CloudFormation.
5. GitHub integration and reviewed deployment pipelines.
