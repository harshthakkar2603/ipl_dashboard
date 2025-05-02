import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p> Target for today is to fetch data from API for IPL and make matchCard</p>  
      <Link href='./matches'>Matches</Link>
    </div>
  );
}
