# nginx-load-balaner-health

Run the image:

```
docker run -p 9090:3000 -d -v /var/run/docker.sock:/var/run/docker.sock —name nginx-health jerryxuxuxu/nginx-load-balancer-health
```