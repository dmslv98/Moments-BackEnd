import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      // eslint-disable-next-line prettier/prettier
      table.increments('id'),
      table.string("username")
      // eslint-disable-next-line prettier/prettier
      table.string("text")

      //a linha abaixo é para criar o id de relacionamento entre as tabelas
      table.integer('moment_id').unsigned().references('moments.id').onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  // eslint-disable-next-line prettier/prettier
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
