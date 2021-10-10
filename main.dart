import 'package:flutter/material.dart';
import 'package:traffic_2/screens/home_screen.dart';
import 'package:traffic_2/screens/login_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
// hello
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    // TODO: implement initState
    autoLoginState();
    super.initState();
  }

  void autoLoginState() async {}

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(),
        home: LoginScreen(),
        routes: {HomeScreen.routeName: (ctx) => HomeScreen()});
  }
}
