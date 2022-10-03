import Link from 'next/link';
import { useEffect } from 'react';
import {useRouter} from 'next/router';
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {

       setTimeout(() => {

         router.push('/');
         
       }, 3000)

    }, [router])
    return(
        <div className="not-found">
            <p>Ooops...</p>
            <h1>Could Not Find Page</h1>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
    )
}

export default NotFound;