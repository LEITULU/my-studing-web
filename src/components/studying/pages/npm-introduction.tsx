import { useLocation } from "react-router-dom";

function NpmIntroduction() {
  const location = useLocation();
  const { title } = location.state as { title: string };

  return (
    <>
    <main className="content">
      <h1>{ title }</h1>

      <section>
        <h2>npmの役割とできること</h2>

        <h3>npmとは</h3>
        <p>
          npm は Node.js で使用されるパッケージ管理ツールです。
          JavaScript のライブラリやツールを簡単にインストール・管理できます。
        </p>

        <h3>npmでできること</h3>
        <ul>
          <li>ライブラリのインストール・削除</li>
          <li>プロジェクトごとの依存関係管理</li>
          <li>ビルドや開発用コマンドの実行</li>
        </ul>

        <h3>npm install の役割</h3>
        <p>
          <code>npm install</code> を実行すると、
          必要なライブラリが node_modules にインストールされ、
          package.json をもとに環境が再現されます。
        </p>

        <h3>package.json とは</h3>
        <p>
          package.json はプロジェクトの設定ファイルで、
          使用しているライブラリや実行コマンドが記載されています。
        </p>

        <h3>node_modules について</h3>
        <p>
          node_modules はインストールされたライブラリ本体が入るフォルダです。
          ファイルサイズが大きいため、Git 管理には含めません。
        </p>

        <h3>npmを使うメリット</h3>
        <ul>
          <li>環境構築が速い</li>
          <li>同じ開発環境を再現できる</li>
          <li>依存関係の管理が簡単</li>
        </ul>

        <h3>今回の学習まとめ</h3>
        <p>
          npm を使うことで、JavaScript や React 開発を効率的に進められることが分かりました。
        </p>
      </section>
    </main>
    </>
  )
}

export default NpmIntroduction;