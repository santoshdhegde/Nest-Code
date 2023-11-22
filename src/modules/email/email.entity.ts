import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface emailsAttributes {
    id?: number;
    fromAddress: string;
    replyToAddress?: string;
    subject?: string;
    toAddress?: string;
    ccAddress?: string;
    bccAddress?: string;
    content?: string;
    sentAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "emails",
	timestamps: false 
})
export class Email extends Model<emailsAttributes, emailsAttributes> implements emailsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "from_address",
    	type: DataType.STRING(255) 
    })
    	fromAddress!: string;

    @Column({
    	field: "reply_to_address",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	replyToAddress?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "index_emails_on_subject",
    	using: "BTREE",
    	order: "ASC",
    	unique: false 
    })
    	subject?: string;

    @Column({
    	field: "to_address",
    	allowNull: true,
    	type: DataType.STRING 
    })
    @Index({
    	name: "index_emails_on_to_address",
    	using: "BTREE",
    	order: "ASC",
    	unique: false 
    })
    	toAddress?: string;

    @Column({
    	field: "cc_address",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	ccAddress?: string;

    @Column({
    	field: "bcc_address",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	bccAddress?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	content?: string;

    @Column({
    	field: "sent_at",
    	allowNull: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "index_emails_on_sent_at",
    	using: "BTREE",
    	order: "ASC",
    	unique: false 
    })
    	sentAt?: Date;

    @Column({
    	field: "created_at",
    	type: DataType.DATE 
    })
    @Index({
    	name: "index_emails_on_created_at",
    	using: "BTREE",
    	order: "ASC",
    	unique: false 
    })
    	createdAt!: Date;

    @Column({
    	field: "updated_at",
    	type: DataType.DATE 
    })
    	updatedAt!: Date;

}