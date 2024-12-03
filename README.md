# appwrite_functions_node_example1

## 概要
* Appwrite の Functions で Node.js を使って hello world! を返すだけのサンプル  
* マニュアルデプロイ(手動でソースを tar.gz にしてアップする) 
* Appwrite はセルフホスト ※ Version 1.6.0

※プロジェクトは作成済みの前提で記載しています。  
※試しに実行するだけの設定です。実際に利用する際は適宜変更してください。

## TODO
* 作成した Function にアクセスする URL が `[UNIQUE_ID].[_APP_DOMAIN_FUNCTIONS]` (例: `64d4d22db370ae41a32e.example.com`) のようにサブドメインになるため、サブドメインに対応していないと URL にアクセスできない。
* CLI でデプロイする手順

## 目次
* [src を tar.gz にアーカイブ](#src-を-targz-にアーカイブ)
* [hello-world Function を作成](#hello-world-function-を作成)
* [試しに実行](#試しに実行)
* [コードを更新し再デプロイする](#コードを更新し再デプロイする)

## 詳細

### src を tar.gz にアーカイブ
Git Bash
```sh
tar --exclude hello-world.tar.gz -czf hello-world.tar.gz -C src .
```

### hello-world Function を作成

#### Functions で Create Function をクリック
![alt text](images/README/image.png)  

#### 左下 manually をクリック
![alt text](images/README/image-1.png)

#### Details に以下を設定し Next をクリック
* Name: hello-world
* Runtime: Node.js - 16.0
* FunctionID: hello-world

![alt text](images/README/image-2.png)

#### Configuration に以下を設定し Next をクリック
* Upload a zip file (tar.gz) ... : 先ほど作成した tar.gz をアップロード
* Entrypoint: index.js

![alt text](images/README/image-3.png)

#### Permissions に以下を設定し Create をクリック
* Permissions: Any

![alt text](images/README/image-4.png)

#### hello-world が作成され、少し待つとビルドが完了し Status が active になる
![alt text](images/README/image-5.png)

### 試しに実行

#### 右下 Exectute をクリック
![alt text](images/README/image-6.png)

#### そのまま再度右下の Execute をクリック
![alt text](images/README/image-7.png)

#### Executions に実行結果が表示されるので、右側 … の Logs をクリック
![alt text](images/README/image-8.png)

#### 実行結果の詳細が確認できる
※サンプルコードにエラーログの出力があるので最初に Errors タブが表示されるが意図した動作  

![alt text](images/README/image-9.png)

### コードを更新し再デプロイする

#### src を tar.gz に再アーカイブ
Git Bash
```sh
tar --exclude hello-world.tar.gz -czf hello-world.tar.gz -C src .
```

#### Create deployment の Manual をクリック
![alt text](images/README/image-10.png)


#### Create manual deployment に以下を設定し Create をクリック
* Gzipped code (tar.gz): 先ほど再作成した tar.gz をアップロード

![alt text](images/README/image-11.png)

#### ビルドが完了すると自動的に最新のビルドが active になる
※右側の … から前のビルドに戻したり削除したりも可能

![alt text](images/README/image-12.png)

#### 試しに実行すると、ちゃんと更新されている
![alt text](images/README/image-13.png)