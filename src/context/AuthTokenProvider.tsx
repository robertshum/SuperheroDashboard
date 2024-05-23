import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { useAuth } from '@clerk/clerk-react';

// Define the type for the context value
type TokenContextValue = string | null;

// Create context with initial value of null
const AuthTokenContext = createContext<TokenContextValue>(null);

// Create provider
const AuthTokenProvider = ({ children }: { children: ReactNode; }) => {

  // get ckerk token
  const { getToken } = useAuth();

  // invoke the key once for browsing session
  const [token, setToken] = useState<TokenContextValue>(null);
  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = await getToken();
      setToken(fetchedToken);
    };
    fetchToken();
  }, [getToken]);

  return (
    <AuthTokenContext.Provider value={token}>
      {children}
    </AuthTokenContext.Provider>
  );
};

// Create custom hook to consume token from context
const useToken = () => useContext(AuthTokenContext);

export { AuthTokenProvider, useToken };
