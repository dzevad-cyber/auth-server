# enviroment development
du: 
	docker-compose -f docker-compose.dev.yml up -d && docker logs -f auth-server-container
dd: 
	docker-compose -f docker-compose.dev.yml down