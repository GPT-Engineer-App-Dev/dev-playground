import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', inputValue);
    setInputValue('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>

      <main className="flex-grow p-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl mb-4">Welcome</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter something..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
};

export default Index;