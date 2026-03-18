import { useState } from "react";
import { useCounterStore } from "./stores/counterStore";
import { useUserStore } from "./stores/userStore";
import { testApi } from "./api/test";

function App() {
  const [count, setCount] = useState(0);
  const [testMessage, setTestMessage] = useState("");
  const [testLoading, setTestLoading] = useState(false);
  const { count: storeCount, increment, decrement, reset } = useCounterStore();
  const { user, setUser, clearUser } = useUserStore();

  const handleTestApi = async () => {
    setTestLoading(true);
    try {
      const data = await testApi();
      setTestMessage(data.message);
    } catch (err) {
      setTestMessage(err instanceof Error ? err.message : "请求失败");
    } finally {
      setTestLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          AI Comic
        </h1>

        <div className="space-y-4">
          {/* Test API */}
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">
              Test API
            </h2>
            <p className="text-gray-600">
              {testMessage || "点击按钮调用后端 /test 接口"}
            </p>
            <button
              onClick={handleTestApi}
              disabled={testLoading}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 mt-4"
            >
              {testLoading ? "加载中..." : "调用 Test API"}
            </button>
          </div>

          {/* Local State Demo */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              Local State
            </h2>
            <p className="text-2xl font-bold text-blue-600">Count: {count}</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setCount((c) => c + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Increment
              </button>
              <button
                onClick={() => setCount((c) => c - 1)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Decrement
              </button>
            </div>
          </div>

          {/* Zustand Store Demo */}
          <div className="p-4 bg-green-50 rounded-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-2">
              Zustand Store
            </h2>
            <p className="text-2xl font-bold text-green-600">
              Count: {storeCount}
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={increment}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Increment
              </button>
              <button
                onClick={decrement}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Decrement
              </button>
              <button
                onClick={reset}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* User Store Demo */}
          <div className="p-4 bg-purple-50 rounded-lg">
            <h2 className="text-lg font-semibold text-purple-800 mb-2">
              User Store (Zustand)
            </h2>
            <p className="text-gray-600">
              {user
                ? `Logged in as: ${user.name} (${user.email})`
                : "Not logged in"}
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() =>
                  setUser({
                    id: "1",
                    name: "John Doe",
                    email: "john@example.com",
                  })
                }
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Login
              </button>
              <button
                onClick={clearUser}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
