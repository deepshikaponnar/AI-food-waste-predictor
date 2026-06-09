Project Title
FlowSense: AI Food Waste Predictor – Smart Food Waste Prediction and Management System
Project Statement
Food waste is a major challenge in restaurants, canteens, hotels, and events. Excess food preparation often leads to wastage and financial loss. FlowSense uses Artificial Intelligence to analyze food consumption patterns and predict future food waste, helping organizations reduce waste, save costs, and improve resource management.
Project Modules
1. User Management Module
User Registration
Login & Authentication
User Profile Management
2. Food Data Collection Module
Food Type Entry
Quantity Tracking
Daily Food Records
3. AI Prediction Module
Analyze Historical Data
Predict Food Waste Amount
Generate Future Waste Forecasts
4. Waste Monitoring Module
Track Actual Waste
Compare Predicted vs Actual Waste
Identify Waste Trends
5. Report Generation Module
Daily Reports
Weekly Reports
Monthly Reports
6. Dashboard Module
Visual Charts
Waste Statistics
Prediction Results Display
7. Notification Module
Waste Alerts
Food Preparation Suggestions
Resource Optimization Tips
Database Table List
1. User Table
Field Name
Type
User_ID
Integer
Name
Varchar
Email
Varchar
Password
Varchar
2. Food_Data Table
Field Name
Type
Food_ID
Integer
Food_Type
Varchar
Quantity_Prepared
Integer
Date
Date
3. Prediction Table
Field Name
Type
Prediction_ID
Integer
Food_ID
Integer
Predicted_Waste
Float
Prediction_Date
Date
4. Waste_Record Table
Field Name
Type
Waste_ID
Integer
Food_ID
Integer
Actual_Waste
Float
Record_Date
Date
5. Report Table
Field Name
Type
Report_ID
Integer
Waste_ID
Integer
Total_Waste
Float
Generated_Date
Date
System Flow
User → Enter Food Data → AI Analysis → Waste Prediction → Waste Monitoring → Report Generation → Dashboard
Expected Outcome
Reduce food wastage effectively.
Improve food preparation planning.
Save operational costs.
Increase resource utilization efficiency.
Provide accurate waste predictions using AI.
Support sustainable food management practices.
Generate reports for better decision-making.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Python (Flask)
Database: MySQL
AI/ML: Scikit-learn, Pandas, NumPy
Visualization: Matplotlib, Power BI
