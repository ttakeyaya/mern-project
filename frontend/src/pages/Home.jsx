import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPencilAlt,
  FaChartLine,
  FaEnvelope,
  FaPeopleArrows,
} from 'react-icons/fa';

import Button from '../components/Button';

function Home() {
  return (
    <main class="home">
      <h1 className="home-title">Flash Card App</h1>
      <p className="home-slogan">Retain more of what you learn</p>
      <Link to="/register">
        <Button buttonName="今すぐ登録する" classNameProp="home-register-btn" />
      </Link>
      <section className="features">
        <h3 className="features-title">アプリの特徴</h3>
        <div className="features-list-container">
          <article className="features-list">
            <h2 className="features-list-title">
              <FaPencilAlt />
              カード作成
            </h2>
            <p className="features-list-txt">
              自由にカテゴリーを設定して学習を開始できます
            </p>
          </article>
          <article className="features-list">
            <h2 className="features-list-title">
              <FaChartLine />
              学習支援
            </h2>
            <p className="features-list-txt">
              学習履歴や覚えたいタイミングを自由に設定できます。
              <br />
              *未実装機能になります
            </p>
          </article>
          <article className="features-list">
            <h2 className="features-list-title">
              <FaEnvelope />
              メール通知
            </h2>
            <p className="features-list-txt">
              お気に入りのカードセットの学習通知を行えます。
              <br />
              *未実装機能になります
            </p>
          </article>
          <article className="features-list">
            <h2 className="features-list-title">
              <FaPeopleArrows />
              カード共有
            </h2>
            <p className="features-list-txt">
              お友達とカードを共有することができます。
              <br />
              *未実装機能になります
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
