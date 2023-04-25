import Head from "next/head";
import Image from "next/image";
import enjoyontv from "assets/enjoyontv.png";
import kids from "assets/kids.png";
import download from "assets/download.jpg";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai"


export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black h-full text-white  ">
        <div className="bg-[url('../assets/netflix.jpg')] w-full h-[500px] sm:h-[400px] md:h-screen bg-cover bg-no-repeat bg-center ">
          <div className="backdrop-brightness-50 h-full px-6 py-4 ">
            <div className="flex items-center justify-between">
              <p className="font-bold text-3xl text-red-600  ">NETFLIX</p>
              <button className="font-medium px-3 py-1 rounded-md bg-red-600">
                <Link href="/login">Sign In</Link>
              </button>
            </div>
            <div className=" h-full flex items-center justify-center  ">
              <div className="text-center">
                <p className=" font-bold text-3xl md:text-4xl mb-4 md:mb-6">
                  Unlimited movies, TV shows, and more.
                </p>
                <p className="text-lg mb-4 md:mb-6 font-semibold">
                  Watch anywhere. Cancel anytime.
                </p>
                <section>
                  <p className="text-xl font-medium">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </p>
                  <div className="flex flex-col items-center md:flex-row gap-4 justify-center mt-4">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="bg-transparent border border-slate-500 py-3 md:py-4 px-4 rounded-md md:w-96 placeholder:text-white font-medium"
                    />
                    <button className="border-none rounded-md bg-red-600 py-2 md:py-4 px-4 font-semibold md:text-2xl">
                      Get Started
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[500px] sm:h-[400px] md:h-screen flex flex-col md:flex-row items-center justify-center p-4   border-t-2 md:border-t-4 border-t-slate-700 border-b-2
        md:border-b-4 border-b-slate-700"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold mb-4">
              Enjoy on your TV.
            </p>
            <p className="text-md font-semibold">
              Watch on Smart TVs, Playstation, Xbox, Chromecast,Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div>
            <Image src={enjoyontv} alt="enjoyontv" />
          </div>
        </div>
        <div
          className="w-full h-[500px] sm:h-[400px] md:h-screen flex flex-col md:flex-row items-center justify-center p-4 border-t-2 md:border-t-4 border-t-slate-700 border-b-2
        md:border-b-4 border-b-slate-700"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold mb-4">
              Download your shows to watch offline.
            </p>
            <p className="text-md font-semibold">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div>
            <Image src={download} alt="download" />
          </div>
        </div>
        <div
          className="w-full h-[250px] sm:h-[200px] md:h-[300px] flex flex-col  items-center justify-center  border-t-2 md:border-t-4 border-t-slate-700 border-b-2
        md:border-b-4 border-b-slate-700 text-center"
        >
          <p className="text-3xl font-bold mb-4">Watch everywhere.</p>
          <p className="text-md font-medium">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div
          className="w-full h-[500px] sm:h-[400px] md:h-screen flex flex-col md:flex-row items-center justify-center p-4  border-t-2 md:border-t-4 border-t-slate-700 border-b-2
        md:border-b-4 border-b-slate-700"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold mb-4">
              Create profiles for kids.
            </p>
            <p className="text-md font-semibold">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          <div>
            <Image src={kids} alt="kids" />
          </div>
        </div>
        <div>
          <p className="text-center font-bold text-3xl md:text-4xl my-4">
            Join our mailing list
          </p>
          <section
            className="text-center  border-b-2
        md:border-b-4 border-b-slate-700 pb-8"
          >
            <p className="text-xl font-medium mt-8">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col items-center md:flex-row gap-2 justify-center mt-4">
              <input
                type="text"
                placeholder="Email address"
                className="bg-transparent border border-slate-500 py-3 md:py-4 px-4 rounded-md md:w-96 placeholder:text-white font-medium"
              />
              <button className="border-none rounded-md bg-red-600 py-2 md:py-4 px-4 font-medium md:text-xl">
                Get Started
              </button>
            </div>
          </section>
        </div>
        <div className="p-4">
          <p>Questions? Contact us</p>
          <div className="grid md:grid-cols-3">
            <div className="space-y-2 text-sm">
              <p className="underline">FAQ</p>
              <p className="underline">Account</p>
              <p className="underline">Jobs</p>
              <p className="underline">Privacy</p>
              <p className="underline">Contact Us</p>
              <p className="underline">Only on Netflix</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="underline">Gift Card Terms</p>
              <p className="underline">Media center</p>
              <p className="underline">Ways to Watch</p>
              <p className="underline">Cookie preferencies</p>
              <p className="underline">Speed Test</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="underline">Help Center</p>
              <p className="underline">Investor Relations</p>
              <p className="underline">Terms of Use</p>
              <p className="underline">Corporate Information</p>
              <p className="underline">Legal Notice</p>
            </div>
          </div>
          <p className="mt-10 text-lg font-medium">Netflix Nigeria</p>
        </div>
        <div className="border-t border-t-neutral-800 py-2 px-4 text-neutral-600 flex items-center justify-between">
          <p className="flex items-center"><AiOutlineCopyrightCircle/>Ayomide 2023</p>
          <div>
            <Link href="https://twitter.com/aiiomide">
            <button className="border border-neutral-800 py-1 px-2 rounded-md bg-white hover:bg-transparent flex items-center gap-2 "><AiFillHeart className="mt-1"/>connect</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
