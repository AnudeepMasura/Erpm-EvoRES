EvoRES ErPM - Structured React Project

This version is split into separate pages and reusable components so errors and future changes are easier to locate.

Folder structure:
src/
  App.jsx
  main.jsx
  components/
    common/       -> AuthGroup, PhoneInput, PublicNav, PublicFooter
    layout/       -> DashboardLayout (header + sidebar)
  data/           -> navigation/page data
  pages/
    auth/         -> Login, Signup, SignupStepOne/Two/Three/Four
    dashboard/    -> DashboardHome
    modules/      -> one file per module + StoreModal + WalletTable
    account/      -> Profile, Announcements, Terms
  styles/         -> global.css
  utils/          -> router.js

Run:
1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open Terminal in that exact folder.
4. npm install
5. npm run dev

Requested changes included:
- Signup "Others" custom business type field
- Separate country-code dropdown for all signup mobile numbers
- Step 1 spacing/alignment
- Sign-in password eye show/hide
- Customer Data through Recruitment under View Modules
- Manage Store Add Store modal with all requested fields
- Added stores appear in Manage Store
- Signup completion goes to Dashboard
