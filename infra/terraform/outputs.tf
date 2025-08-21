output "cluster_name" { value = var.cluster_name }
output "region" { value = var.region }
output "vpc_id" { value = module.vpc.vpc_id }
output "subnets" { value = module.vpc.private_subnets }
