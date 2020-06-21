import React from "react";

export const Page7 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan">
      <h1 className="p-16">お問い合わせ</h1>
      <p className="w-4/5 p-16 text-4xl leading-normal">
        当社へのお問い合せは、下記お問い合せフォームにてお寄せください。
        後日、担当者よりご連絡させていただきます。
      </p>
      <form className="w-3/5">
        <div className="flex mb-8">
          <span className="w-1/4 px-8 py-4 text-right">お名前</span>
          <input className="w-3/4 p-4" />
        </div>
        <div className="flex mb-8">
          <span className="w-1/4 px-8 py-4 text-right">メールアドレス</span>
          <input className="w-3/4 p-4" />
        </div>
        <div className="flex mb-8">
          <span className="w-1/4 px-8 py-4 text-right">お問い合わせ内容</span>
          <input className="w-3/4 p-4" />
        </div>
        <div className="flex mb-8">
          <span className="w-1/4 px-8 py-4 "></span>
          <div className="w-3/4">
            <button>確認</button>
          </div>
        </div>
      </form>
    </div>
  );
};
