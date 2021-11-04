import StudentDashboard from "@components/Student/StudentDashboard";
import TeacherDashboard from "@components/Teacher/TeacherDashboard";
import Login from "@components/Login";
import Signup from "@components/Signup";
import UserProvider from "@contexts/User/UserProvider";
import Create from "@pages/Create";
import Landing from "@pages/Landing";
import NotFound from "@pages/NotFound";
import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

const App = () => {
	return (
		<UserProvider>
			<Router>
				<Switch>
					<Route
						path="/"
						exact
						component={Landing}
					/>
					<Route
						component={StudentDashboard}
						path="/student"
					/>
					<Route
						component={TeacherDashboard}
						path="/teacher"
					/>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route
						path="/create"
						exact
						component={Create}
					/>
					<Route
						path="*"
						component={NotFound}
					/>
				</Switch>
			</Router>
		</UserProvider>
	)
}

export default App
