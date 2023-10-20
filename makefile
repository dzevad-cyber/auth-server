# enviroment development
du: 
	docker-compose -f docker-compose.dev.yml up 
dd: 
	docker-compose -f docker-compose.dev.yml down -v