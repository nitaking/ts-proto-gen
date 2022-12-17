
This playground inspired by this article: [Protocol Buffers から TypeScript の型定義を作る
](https://zenn.dev/ryo_kawamata/articles/ts-from-protocol-buffers) 

# Getting Started

User -> BFF Client -> gRPC Server

```shell
yarn install
yarn dev
```

call get-posts

```shell
 curl http://localhost:9999/get-posts
{"result":{"postsList":[{"id":1,"title":"にたわき","content":"よろしくおねがいします"},{"id":2,"title":"犬","content":"犬をよろしくおねがいします"}]}}
```
