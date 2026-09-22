# CloudSketch AWS v0.3.0

CloudSketch AWS now combines visual AWS architecture design, infrastructure-as-code export, cost estimation and design-time Well-Architected review.

## Highlights

- Three editable AWS accelerators, each stored as an independent module.
- Terraform, TypeScript AWS CDK and CloudFormation YAML export.
- Monthly per-resource estimates with explicit usage assumptions.
- Safe integration contract for a server-side AWS Price List API proxy.
- Architecture findings and scores across all six AWS Well-Architected pillars.
- Typed dependency and deployment-readiness validation.
- Nine passing automated tests.

## Important limitations

Pricing estimates are for early comparison and are not bill forecasts. The fallback catalogue excludes taxes, support, transfer charges, negotiated discounts, Savings Plans and several service-specific dimensions. Live rates require a separately deployed HTTPS pricing proxy.

Well-Architected results are heuristic design-time guidance and do not replace the AWS Well-Architected Tool or a formal workload review. Complex services marked with `TODO` still require production-specific IAM, networking and account configuration before deployment.
