import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    console.log(user);
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {outlet}
    </div>
  );
};
