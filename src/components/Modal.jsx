//モーダル変数の真偽値を用意して、trueであれば表示、falseであれば非表示にする。

import React, {useState} from 'react'

export const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const List = [
    {
      name: 'HTML & CSS',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
      introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
    },
    {
      name: 'Sass',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
      introduction: 'SassはCSSをより便利に効率的にするための言語です。',
    },
    {
      name: 'JavaScript',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
      introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
    },
    {
      name: 'React',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
      introduction: 'ReactはHTMLのように、サイトの見た目をつくることができるJavaScriptのライブラリです。',
    },
  ];


  return (
    <div className="card-container">
      <h4> モーダル </h4>
      {/* MAP関数を使用する時はindexをリストのkeyに入力 */}
      {List.map((Item, index) => { 
        return (
          <div className="card" key={index}>
            <div className="card-item" onClick={()=> setModalIsOpen(true)} >
              <p>{Item.name}</p>
              <img src={Item.image} />
            </div>
            {/* 三項演算子で記入する */}
            { modalIsOpen? (
                <div className="modal">
                <div className="modal-inner">
                  <div className="modal-header"></div>
                  <div className="modal-instruction">
                    <h2>{Item.name}</h2>
                    <p>{Item.introduction}</p>
                  </div>
                  <button className='modal-close-btn' onClick={()=> setModalIsOpen(false)}>とじる</button>
                </div>
              </div>
              ) : (<></>)
            } 
          </div>
        )
    })}
</div>


  )
}
