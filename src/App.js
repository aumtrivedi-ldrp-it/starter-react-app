import "./App.css";
import { Route, Routes } from "react-router-dom";
import SelectionScreen from "./Pages/Common/SelectionScreen";
import AdminLogin from "./Pages/Admin/AdminLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHome from "./Pages/Admin/AdminHome";
import AdminMemberList from "./Pages/Admin/AdminMemberList";
import AdminResetPasswordRequest from "./Pages/Admin/AdminResetPasswordRequest";
import AdminSearchStaff from "./Pages/Admin/AdminSearchStaff";
import AdminAddMember from "./Pages/Admin/AdminAddMember";
import { StaffLogin } from "./Pages/Staff/StaffLogin";
import { StaffHomePage } from "./Pages/Staff/StaffHomePage";
import { PendingApproveDoForm } from "./Pages/Staff/PendingApproveDoForm";
import { StaffGetAllRecovery } from "./Pages/Staff/StaffGetAllRecovery";
import { StaffAllCustomers } from "./Pages/Staff/StaffAllCustomer";
import { StaffDefaulterPage } from "./Pages/Staff/StaffDeafulterPage";
import { StaffRecoverySelectPage } from "./Pages/Staff/StaffRecoverySelectPage";
import { StaffCollectPayment } from "./Pages/Staff/StaffCollectPayment";
import AdminResetPassword from "./Pages/Admin/AdminResetPassword";
import AdminShowroomManagement from "./Pages/Admin/AdminShowroomManagement";
import AdminAddShoroom from "./Pages/Admin/AdminAddShoroom";
import AdminSubAdminManagement from "./Pages/Admin/AdminSubAdminManagement";
import AdminDownloadAttendance from "./Pages/Admin/AdminDownloadAttendance";
import AdminSchemeManagement from "./Pages/Admin/AdminSchemeManagement";
import AdminAddNewScheme from "./Pages/Admin/AdminAddNewScheme";
import { StaffCustomerEMIList } from "./Pages/Staff/StaffCustomerEMIList";
import { StaffPayEMI } from "./Pages/Staff/StaffPayEMI";
import { DealerLoginPage } from "./Pages/Dealer/DealerLogin";
import { DealerHome } from "./Pages/Dealer/DealerHome";
import { DealerPendingDoForm } from "./Pages/Dealer/DealerPendingDoForm";
import { DealerCollectPayment } from "./Pages/Dealer/DealerCollectPayment";
import { DealerCustomerEMIList } from "./Pages/Dealer/DealerCustomerEMIList";
import { DealerDOForm } from "./Pages/Dealer/DealerDOForm";
import { DealerDOFormSuccess } from "./Pages/Dealer/DealerDOFormSuccess";
import RecoveryLogin from "./Pages/Recovery/RecoveryLogin";
import RecoveryHome from "./Pages/Recovery/RecoveryHome";
import RecoveryProfile from "./Pages/Recovery/RecoveryProfile";
import CustomerHome from "./Pages/Customers/CustomerHome";
import CustomerOther from "./Pages/Customers/CustomerOther";
import CustomerContactStaff from "./Pages/Customers/CustomerContactStaff";
import CustomerView from "./Pages/Customers/CustomerView";
import CustomerLocateOffice from "./Pages/Customers/CustomerLocateOffice";
import CustomerLogin from "./Pages/Customers/CustomerLogin";
import CustomerHomePending from "./Pages/Customers/CustomerHomePending";
import CustomerHomeHistory from "./Pages/Customers/CustomerHomeHistory";
import AdminAttendance from "./Pages/Admin/AdminAttendance";
import SubAdminLogin from "./Pages/SubAdmin/SubAdminLogin";
import { SubAdminHome } from "./Pages/SubAdmin/SubAdminHome";
import { DealerCreateLoanAgreement } from "./Pages/Dealer/DealerCreateLoanAgreement";
import { DealerLoanAgreement } from "./Pages/Dealer/DealerLoanAgreement";
import { AdminPendingDoForm } from "./Pages/Admin/AdminPendingDOForm";
import { AdminCreateLoanAgreement } from "./Pages/Admin/AdminCreateLoanAgreement";
import { AdminLoanAgreement } from "./Pages/Admin/AdminLoanAgreement";
import { AdminDOForm } from "./Pages/Admin/AdminDoForm";
import { AdminDOFormSuccess } from "./Pages/Admin/AdminDoFormSuccess";
import { AdminGetAllRecovery } from "./Pages/Admin/AdminGetAllRecovery";
import { AdminAllCustomers } from "./Pages/Admin/AdminAllCustomers";
import { AdminDefaulterPage } from "./Pages/Admin/AdminDefaulterPage";
import { AdminRecoverySelectPage } from "./Pages/Admin/AdminSelectPage";
import { StaffCreateLoanAgreement } from "./Pages/Staff/StaffCreateLoanAgreement";
import { StaffLoanAgreement } from "./Pages/Staff/StaffLoanAgreement";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SelectionScreen />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/members" element={<AdminMemberList />} />
        <Route path="/admin/add-member" element={<AdminAddMember />} />
        <Route
          path="/admin/reset-request"
          element={<AdminResetPasswordRequest />}
        />
        <Route path="/admin/search-staff" element={<AdminSearchStaff />} />
        <Route path="/admin/reset-password" element={<AdminResetPassword />} />
        <Route
          path="/admin/showroom-management"
          element={<AdminShowroomManagement />}
        />
        <Route path="/admin/add-showroom" element={<AdminAddShoroom />} />
        <Route
          path="/admin/sub-admin-management"
          element={<AdminSubAdminManagement />}
        />
        <Route
          path="/admin/download-attendance"
          element={<AdminDownloadAttendance />}
        />
        <Route
          path="/admin/scheme-management"
          element={<AdminSchemeManagement />}
        />
        <Route path="/admin/add-scheme" element={<AdminAddNewScheme />} />
        <Route path="/admin/attendance" element={<AdminAttendance />} />
        <Route path="/admin/pendingDoForm" element={<AdminPendingDoForm />} />
        <Route
          path="/admin/create-loanagreement"
          element={<AdminCreateLoanAgreement />}
        />
        <Route
          path="/admin/loanagreement-form"
          element={<AdminLoanAgreement />}
        />
        <Route path="/admin/new-do-form" element={<AdminDOForm />} />
        <Route path="/admin/do-form-success" element={<AdminDOFormSuccess />} />
        <Route path="/admin/allrecovery" element={<AdminGetAllRecovery />} />
        <Route path="/admin/allcustomers" element={<AdminAllCustomers />} />
        <Route path="/admin/defaulter" element={<AdminDefaulterPage />} />
        <Route
          path="/admin/defaulter/assign-recovery/:id"
          element={<AdminRecoverySelectPage />}
        />
        <Route path="/staff/login" element={<StaffLogin />} />
        <Route path="/staff/home" element={<StaffHomePage />} />
        <Route path="/staff/pendingDoForm" element={<PendingApproveDoForm />} />
        <Route path="/staff/allrecovery" element={<StaffGetAllRecovery />} />
        <Route path="/staff/allcustomers" element={<StaffAllCustomers />} />
        <Route path="/staff/defaulter" element={<StaffDefaulterPage />} />
        <Route
          path="/staff/defaulter/assign-recovery/:id"
          element={<StaffRecoverySelectPage />}
        />
        <Route
          path="/staff/collect-payment"
          element={<StaffCollectPayment />}
        />
        <Route
          path="/staff/customer-emi-list"
          element={<StaffCustomerEMIList />}
        />
        <Route path="/staff/pay-emi" element={<StaffPayEMI />} />
        <Route
          path="/staff/create-loanagreement"
          element={< StaffCreateLoanAgreement/>}
        />
        <Route
          path="/staff/loanagreement-form"
          element={<StaffLoanAgreement />}
        />
        <Route path="/dealer/login" element={<DealerLoginPage />} />
        <Route path="/dealer/home" element={<DealerHome />} />
        <Route path="/dealer/pendingDoForm" element={<DealerPendingDoForm />} />
        <Route
          path="/dealer/collect-payment"
          element={<DealerCollectPayment />}
        />
        <Route
          path="/dealer/customer-emi-list"
          element={<DealerCustomerEMIList />}
        />
        <Route path="/dealer/new-do-form" element={<DealerDOForm />} />
        <Route
          path="/dealer/do-form-success"
          element={<DealerDOFormSuccess />}
        />
        <Route
          path="/dealer/create-loanagreement"
          element={<DealerCreateLoanAgreement />}
        />
        <Route
          path="/dealer/loanagreement-form"
          element={<DealerLoanAgreement />}
        />
        <Route path="/recovery/login" element={<RecoveryLogin />} />
        <Route path="/recovery/home" element={<RecoveryHome />} />
        <Route path="/recovery/profile" element={<RecoveryProfile />} />
        <Route path="/subadmin/login" element={<SubAdminLogin />} />
        <Route path="/subadmin/home" element={<SubAdminHome />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/customer/home" element={<CustomerHome />} />
        <Route path="/customer/other" element={<CustomerOther />} />
        <Route
          path="/customer/other/contactstaff"
          element={<CustomerContactStaff />}
        />
        <Route path="/customer/other/view" element={<CustomerView />} />
        <Route
          path="/customer/other/locateoffice"
          element={<CustomerLocateOffice />}
        />
        <Route
          path="/customer/home/pending"
          element={<CustomerHomePending />}
        />
        <Route
          path="/customer/home/history"
          element={<CustomerHomeHistory />}
        />
      </Routes>
    </>
  );
}

export default App;
