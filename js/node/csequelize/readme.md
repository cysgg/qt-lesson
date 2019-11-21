### sequelize 初始化
1. ./node_modules/.bin/sequelize init
2. ./node_modules/.bin/sequelize db:create
3. ./node_modules/.bin/sequelize migration:create --name 
4. ./node_modules/.bin/sequelize db:migrate
5. ./node_modules/.bin/sequelize seed:create --name init-shops
create-shops-table
- config
- migrations
  数据库迁移 会将mysql 表， 字段， 创建，修改 迁移全部留下记录
- models 业务模型层
  表映射为对象
  Article
  Insert into
  new Article({title: ''})
- seeders 
  测试数据
- 离开sql 来到工具