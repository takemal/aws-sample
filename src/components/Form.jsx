import React, {useState} from 'react'

export const Form = () => {
  const initialValues = { name: "", email: "", password: "", content: "" };
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initialValues)
  const [formCompleted, setFormCompleted] = useState(false)

  //入力されたタグのname属性と同じキーに対してvalue変数を代入する
  const handleChange =(e) => {
    // e.targetは入力されたインプットタグをとってくる。
    // 分割代入でインプットオブジェクトのname属性とvalue属性をとってくる
    const {name, value} =e.target;
    //スプレッド構文で代入。スプレッド構文のキーに変数を指定する場合は、[]で囲う
    const newFormValues = {...formValues, [name]: value}
    setFormValues(newFormValues)
  }


  const handleSubmit =(e) => {
    //現URLに対するデータ送信(リロード)を防ぐ
    e.preventDefault();
    //もし、バリデーションに引っ掛かるならエラーオブジェクトを返す
    const newFormErrors = validate(formValues);
    setFormErrors(newFormErrors);
    //エラーオブジェクトがない場合は、完了
    console.log(newFormErrors);
    if (Object.keys(newFormErrors).length === 0) {
      setFormCompleted(true)  
    }
  }

  //バリデーションチェック。引数のオブジェクトに対象のエラーがあればエラーオブジェクトとして返す
  const validate = (values) => {
    const errors ={};
    //半角英数字のみ(空文字OK)
    const regex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!values.name) {
      errors.name = "ユーザー名を入力してください。";
    }
    if (!values.email) {
      errors.email = "メールアドレスを入力してください。";
    } else if (!regex.test(values.email)) {
      errors.email = "正しいメールアドレスを入力してください";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください。";
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    } else if (values.password.length > 15) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    }
    return errors; 
  }

  return (
    <div className='contact-container'>
      <h4>フォーム</h4>
      <div className="contact-form">
        {formCompleted? (
          <div className="contact-submit-message">
            送信完了
          </div>
        ):(
          <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="Name">氏名(必須)</label>
            <input type="text" id="Name" name="name" value={formValues.name} onChange={(event)=> handleChange(event)} />
            {formErrors? (<p className='contact-message-error'>{formErrors.name}</p>): (<></>)}

            <label htmlFor="Email">メールアドレス(必須)</label>
            <input type="text" id="Email" name="email" value={formValues.email} onChange={(event)=> handleChange(event)} />
            {formErrors? (<p className='contact-message-error'>{formErrors.email}</p>): (<></>)}

            <label htmlFor="Password">パスワード(必須)</label>
            <input type="password" id="Password" name="password" value={formValues.password} onChange={(event)=> handleChange(event)} />
            {formErrors? (<p className='contact-message-error'>{formErrors.password}</p>): (<></>)}

            <label htmlFor="Content">備考(必須)</label>
            <input type="textarea" id="Content" name="content" value={formValues.content} onChange={(event)=> handleChange(event)} />

            <button type="submit">送信</button>
          </form>
        )}
      </div>
    </div>
  )
}
