/* login component using atoms and design tokens */
import { atoms } from "../../index";
import { PropsType } from "./types";
import { useEffect, useState } from "react";

export default function Login({
  username: initialUsername,
  password: initialPassword,
}: PropsType) {
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState(initialPassword);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, password]);

  const handleLogin = () => {
    console.log("login", username, password);
  };
  return (
    <div className="flex flex-col gap-4">
      <atoms.Input
        placeholder="Enter your username"
        value={username}
        onChange={(value) => setUsername(value)}
      />
      <atoms.Input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(value) => setPassword(value)}
      />
      <div className="flex items-center gap-2">
        <atoms.Checkbox onChange={() => {}} />
        <atoms.Text size="sm" id="remember-me" data-name="remember-me">
          Remember me
        </atoms.Text>
      </div>
      <atoms.Button
        variant="secondary"
        size="medium"
        disabled={isDisabled}
        onClick={handleLogin}
      >
        Login
      </atoms.Button>
    </div>
  );
}
