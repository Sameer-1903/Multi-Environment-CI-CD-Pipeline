# Monitoring (Prometheus + Grafana)

Install kube-prometheus-stack via Helm:
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm upgrade --install kps prometheus-community/kube-prometheus-stack -n monitoring --create-namespace
```

Then port-forward Grafana:
```bash
kubectl -n monitoring get secret kps-grafana -o jsonpath="{.data.admin-password}" | base64 -d && echo
kubectl -n monitoring port-forward svc/kps-grafana 3000:80
# Open http://localhost:3000
# User: admin, Password: (from secret above)
```
