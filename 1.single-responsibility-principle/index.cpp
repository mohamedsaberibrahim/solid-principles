// Bad example
class User {
public:
  void validateUser() {
    // Code for validating user
  }
  
  void sendNotification() {
    // Code for sending notification
  }
};

// Good example
class UserValidator {
public:
  void validateUser() {
    // Code for validating user
  }
};

class NotificationSender {
public:
  void sendNotification() {
    // Code for sending notification
  }
};
