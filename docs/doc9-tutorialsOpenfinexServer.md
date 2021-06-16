---
id: OpenfinexServerHowTo
title: How to use the Openfinex Server
sidebar_label: Tutorials
---

This is currently just a Knowhow dump, not a full fledged tutorial.

### Openfinex Server
What you need:
- polkadex.tar
- compose 
  - structure.sql
  - upstream_compose.yml
- config
  - config.yaml
  - rsa-key
  - rsa-key.pub

The rsa-key will be used for JWT authentication. This is key is currently not defined, any rsa key will suffice for now. Rsa keys and JWT token can be generated with 
[barong-jwt](https://github.com/openware/barong-jwt)
The other files can be obtained from Gautham or Bigna TODO: Better solution for that?!

#### Barong JWT: 
not necessary for server start up, only used for RSA key and / or JWT generation
- `git clone https://github.com/openware/barong-jwt.git`
- `cd barong-jwt`
- `go run main.go -role admin`

This will 
1) create a config folder containing an rsa-key pair. Copy paste this folder to the folder where you have your polkadex.tar file and compose folder.
2) output an JWT token

#### Start openfinex Server
To start the server you need to do the following:
```bash
# Load the polkadex.tar to your docker:
docker load --input polkadex.tar
# start docker compose
docker-compose -f compose/upstream_compose.yml up -Vd
# wait for ~30s and then start the services again - api and engine can only be started when the other services are runnning already
docker-compose -f compose/upstream_compose.yml start
```
You can test the server with:
```bash
wscat --connect localhost:8001/api/v2/ws --header "Authorization: Bearer [JWTTOKEN]"
```

Currently, new accounts need to be registed manually (see issue [#94](https://github.com/Polkadex-Substrate/polkadexTEE-worker/issues/94)). This can be done the following way:
```bash
# Exec to database:
docker-compose -f compose/upstream_compose.yml exec database mysql -uroot --database finex_development
# Register //Alice:
INSERT INTO members(uid,email,level,role,state,created_at,updated_at,username)
VALUES('ALICE','protected',3,'member','active','2021-05-20 14:43:58','2021-05-20 14:41:41', '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
# Register //Bob:
INSERT INTO members(uid,email,level,role,state,created_at,updated_at,username) 
VALUES('BOB','protected_bob',3,'member','active','2021-05-20 14:43:58','2021-05-20 14:41:41', '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty');
```
