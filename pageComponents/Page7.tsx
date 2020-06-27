import React from "react";

export const Page7 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan">
      <h1 className="p-16">お問い合わせ</h1>
      <h3 className="w-4/5 p-16">
        当社へのお問い合せは、下記お問い合せフォームにてお寄せください。
        後日、担当者よりご連絡させていただきます。
      </h3>
      <div className="flex flex-col p-4">
        <form className="grid grid-cols-2">
          <div className="flex flex-col space-y-20">
            <h3 className="h-20 p-4 text-3xl text-right whitespace-no-wrap sm:text-4xl">
              お名前
            </h3>
            <h3 className="h-20 p-4 text-3xl text-right whitespace-no-wrap sm:text-4xl">
              メ ールアドレス
            </h3>
            <h3 className="h-20 p-4 text-3xl text-right whitespace-pre-line sm:text-4xl">
              お問い合わせ内容
            </h3>
          </div>

          <div className="flex flex-col space-y-20">
            <input className="items-stretch h-20 p-4 sm:w-128" />
            <input className="items-stretch h-20 p-4 sm:w-128" />
            <input className="items-stretch h-20 p-4 sm:w-128" />
          </div>
        </form>

        <div className="w-64 pt-16">
          <button className="text-4xl">確認</button>
        </div>
      </div>
    </div>
  );
};
