# randomsqrt
A simple random square root API endpoint to generate CPU loads.

# Build
`npm install`

# Run
`npm start`

# Deploy
`kubectl apply -f deploy/`
or alternatively, make a HPA deployment
```
cd deploy
kubectl apply -f k8s-deployment.yaml
kubectl expose deployment randomsqrt-deployment --type=LoadBalancer --name=randomsqrt-service
kubectl autoscale deployment randomsqrt-deployment --cpu-percent=50 --min=3 --max=12 --name=randomsqrt-hpa
```

# Hit the end-point
http://localhost:3000
