// WithAuth.js
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { callFetcher } from './fetcher';


const WithAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [admin, setAdmin] = useState();
    useEffect(() => {
      (async () => {
        const token = Cookies.get('token');
        if (!token) {
          router.push('/');
        }

        try {
          const adminData = await callFetcher('admin/profile', 'get');
          if (!adminData) {
            Cookies.remove('token');
            router.push('/');
            return;
          }
          setAdmin(adminData);
        } catch (error) {
          console.error(error);
          Cookies.remove('token');
          router.push('/');
          return;
        }
      })()
    }, []);

    return <WrappedComponent {...props} adminData={admin} />;
  };

  return Wrapper;
};

export default WithAuth;
