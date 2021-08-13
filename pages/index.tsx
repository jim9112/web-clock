import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import QuoteComp from '../components/QuoteComp';
import TimeBlock from '../components/TimeBlock';
import useGetTime from '../hooks/useGetTime';

interface IDate {
  date: {
    hrs: number;
    min: string;
    timezone: any;
  };
}

export default function Home() {
  const { date }: IDate = useGetTime();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen bg-day-mobile bg-no-repeat bg-cover">
        <div className="grid w-full min-h-screen bg-gray-500 bg-opacity-30 py-8">
          <QuoteComp />
          <TimeBlock date={date} />
        </div>
      </main>
    </div>
  );
}
