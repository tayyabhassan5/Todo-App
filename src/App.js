import RouterComponent from './Router'
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux'
import { persistor, store } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>

          <RouterComponent />
          
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
