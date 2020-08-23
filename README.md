# README
## What is this
これは家族や友人とチャットをすることができるアプリです。

## What can be done
このアプリでできることは..

- メインページ表示
- ユーザー登録
- グループ作成
- メッセージ投稿
- 写真投稿

## Test Account
テストアカウントは下記です。
ニックネーム：テスト
email:test@sample.com
password:testtest

<img width="1272" alt="スクリーンショット 2020-08-23 22 12 18" src="https://user-images.githubusercontent.com/62044473/90979239-cadfc200-e58e-11ea-8a4f-70818073c9fa.png">
<img width="1272" alt="スクリーンショット 2020-08-23 22 12 29" src="https://user-images.githubusercontent.com/62044473/90979254-e6e36380-e58e-11ea-8064-751873591d41.png">


## Language Flamework
このアプリは下記の言語とフレームワークを使用しています。

- Ruby
- Ruby on rails
- JavaScript
- Json
- jQuery
- Haml
- Scss
- AWS

## Database
ここからはDatabaseの詳細について説明

### usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
Association
- has_many :chats
- has_many :groups_users
- has_many :groups, through: :groups_users

### chatsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
Association
- belongs_to :group
- belongs_to :user

### groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
Association
- has_many :chats
- has_many :groups_users
- has_many :users, through: :groups_users

### groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
Association
- belongs_to :group
- belongs_to :user
