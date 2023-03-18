import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export default function Text({ current }) {
  const { t } = useTranslation('terms');

  return (
    <div className='w-full h-full bg-green-100 py-10'>
      <div className='p-6 md:max-w-[700px] mx-auto md:px-20 bg-[#00000010] rounded-xl'>
        <div className=''>
          <p className='pb-4'>{t(`${current}.text.p1`)}</p>
          <p className='pb-4'>{t(`${current}.text.p2`)}</p>
          {/* <p className='pb-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            maiores inventore assumenda voluptate repellendus sed iusto
            cupiditate, natus nisi repudiandae doloribus at corporis cumque
            veniam quos, quisquam amet minima dolorum!
          </p>
          <p className='pb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            optio harum magnam assumenda molestiae. Tempore omnis, quis
            repellendus soluta perferendis assumenda deserunt molestias debitis
            sunt aliquam sit quaerat earum exercitationem, neque totam magni
            pariatur beatae aperiam dolorum facilis necessitatibus dolorem a?
            Non ad laboriosam, et soluta rem reprehenderit molestias tenetur eum
            optio hic voluptatum iste delectus odit commodi quo iure, cupiditate
            earum, assumenda itaque saepe rerum? Libero corrupti magni animi
            provident architecto quae reiciendis dolorum, asperiores nihil alias
            itaque? Maiores.
          </p>
          <p className='pb-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            consequatur officia in nesciunt quo ad suscipit assumenda
            perferendis fuga a.
          </p> */}
          {/* <div className='text-end'>
            <Link href={'#'}>...leia mais</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
