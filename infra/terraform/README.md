# Terraform — EKS Skeleton

This skeleton uses the community EKS module. You must:
- Set AWS credentials (env or profile).
- Fill variables in `terraform.tfvars`.
- (Optional) Configure a remote backend for state (S3 + DynamoDB).

## Usage
```bash
cd infra/terraform
terraform init
terraform plan -out plan.out
terraform apply plan.out
```

After creation, export kubeconfig:
```bash
aws eks update-kubeconfig --name ${var.cluster_name} --region ${var.region}
```
