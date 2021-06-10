### <a name="install-dependencies"></a>依存関係のインストール

作業を開始する前に、<a href="https://go.microsoft.com/fwlink/?linkid=2016389" target="_blank">Visual Studio 2019</a> をインストールする必要があります。[Azure の開発] ワークロードもインストールされていることを確認してください。

Visual Studio がインストールされたら、<a href="https://go.microsoft.com/fwlink/?linkid=2016394" target="_blank">最新の Azure Functions ツール</a>があることを確認します。

<br/>
### <a name="create-an-azure-functions-project"></a>Azure Functions プロジェクトを作成する

Visual Studio で、 **[ファイル]** メニューから **[新規]**  >  **[プロジェクト]** の順に選択します。

**[新しいプロジェクト]** ダイアログで、**[インストール済み]** を選択し、**[Visual C#]** > **[クラウド]** の順に展開して **[Azure Functions]** を選択します。プロジェクトの **名前** を入力して、**[OK]** をクリックします。 関数アプリ名は、C# 名前空間として有効である必要があります。そのため、アンダースコア、ハイフン、その他の英数字以外の文字は使用しないでください。

ウィザードに従って、テンプレートを選択し、カスタマイズします。 作業の開始用として、HTTP をお勧めします。 次に、 **[OK]** をクリックして、最初の関数を作成します。

<br/>
### <a name="create-a-function"></a>関数を作成する

プロジェクトを作成すると、既定で HTTP 関数が作成されるため、この時点ではこの手順について何もする必要はありません。 後で新しい関数を追加する場合は、**ソリューション エクスプローラー** でプロジェクトを右クリックし、 **[追加]**  >  **[新しい Azure 関数]** を選択します。

関数に名前を付け、 **[追加]** をクリックします。 テンプレートを選択してカスタマイズし、 **[OK]** をクリックします。

<br/>
### <a name="run-your-function-project-locally"></a>関数プロジェクトをローカルで実行する

関数アプリを実行するには、**F5** キーを押します。

HTTP 関数の URL が出力されます。これをブラウザーのアドレス バーにコピーして実行できます。

デバッグを停止するには、**Shift キーを押しながら F5 キー** を押します。

<br/>
### <a name="deploy-your-code-to-azure"></a>コードを Azure にデプロイする

**[ソリューション エクスプローラー]** でプロジェクトを右クリックし、 **[発行]** を選択します。

発行先として [Azure Function App]\(Azure 関数アプリ\) を選択し、 **[既存のものを選択]** を選択します。 **[発行]** をクリックします。

まだ Visual Studio を Azure アカウントに接続していない場合は、 **[アカウントの追加]** を選択し、 画面の指示に従います。

**[サブスクリプション]** で、[{subscriptionName}] を選択します。 {functionAppName} を検索し、下のセクションで選択します。 次に、 **[OK]** をクリックします