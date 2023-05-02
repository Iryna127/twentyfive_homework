import './App.css';
import AddRecordForm from './components/addRecordForm';
import PhoneBookRecords from './components/phoneBookRecords';
import RecordsDataContextProvider from './providers/recordDataProvider';
import LoginForm from './components/loginFormComponent';
import AuthProvider from './providers/authProvider';

function App() {
  return (
    <AuthProvider>
      <LoginForm />
      <RecordsDataContextProvider>
        <div className="App">
          Phone Book
          <AddRecordForm />
          <PhoneBookRecords />
        </div>
      </RecordsDataContextProvider>
    </AuthProvider>
  );
}

export default App;
