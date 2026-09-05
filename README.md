# Featured Icon - Digital Business Card System

Featured Icon is a comprehensive digital business card platform that bridges physical and digital networking through QR code integration. The system provides professional card templates with seamless setup workflows, comprehensive admin management, and mobile-first responsive design.

## 🚀 Project Overview

Featured Icon transforms traditional business cards into dynamic digital experiences. Each physical card contains a unique QR code that links to a personalized digital profile, enabling instant contact sharing and professional networking. The platform supports three distinct card tiers with different feature sets and pricing structures.

### Key Capabilities
- **QR Code Integration**: Physical cards with pre-printed QR codes for instant digital access
- **Card Management**: Comprehensive admin dashboard for order processing and card lifecycle management
- **User Profiles**: Customizable digital business card profiles with contact information and social links
- **Analytics Dashboard**: Real-time tracking of card usage, upgrades, and system metrics
- **Mobile-First Design**: Optimized for smartphone scanning and mobile profile viewing

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS 4 with custom design system
- **Database**: Supabase (PostgreSQL) with Row Level Security
- **Authentication**: Supabase Auth with admin role management
- **QR Codes**: QRCode.js library for generation and management
- **File Storage**: Supabase Storage for image uploads
- **Charts**: Chart.js with React Chart.js 2 for analytics
- **Deployment**: Optimized for Vercel platform

## ✨ Key Features

### Card Types & Pricing
- **Basic Cards ($499)**: Essential digital business card with clean plastic design
  - Contact information and social links
  - Limited to 3 social media platforms
  - Landscape image support

- **Premium Cards ($999)**: Enhanced professional experience with luxury materials
  - All Basic features plus unlimited social links
  - About Me section and cover photo
  - Profile photo and portrait image gallery

- **Executive Cards ($1,499)**: Comprehensive professional profiles
  - All Premium features plus business information
  - Education background and skills summary
  - Address and comprehensive contact details

### Core Functionality
- **QR Code Workflow**: Scan → Setup/View → Share
- **Frictionless Setup**: No authentication required for card configuration
- **Permanent Profiles**: Profile data becomes locked after initial setup for security
- **Admin Dashboard**: Complete card lifecycle management and analytics
- **Bulk Operations**: Mass card creation and management tools
- **Print Tracking**: Status monitoring for physical card production
- **Upgrade System**: Seamless card type upgrades with data preservation

### Technical Features
- **Mobile-Optimized**: Native camera QR scanning support
- **Responsive Design**: Consistent experience across all devices
- **WCAG Compliance**: Accessibility standards with proper contrast ratios
- **Real-time Updates**: Live data synchronization across admin interfaces
- **Secure Authentication**: Role-based access control with admin privileges

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18.18.0 or higher
- npm, yarn, pnpm, or bun package manager
- Supabase account and project

### Environment Configuration

Create a `.env.local` file in the project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Optional: Additional configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Database Setup

1. **Create Supabase Project**: Set up a new project at [supabase.com](https://supabase.com)

2. **Run Database Migrations**: Execute the SQL schema files in the `scripts/` directory:
   ```sql
   -- Core tables: user_profiles, cards, card_types, orders, payments
   -- Admin tables: admin_logs, upgrade_history
   -- Feature tables: card_type_features, card_inclusions
   ```

3. **Configure Row Level Security**: Enable RLS policies for data protection

4. **Set Up Storage Buckets**: Create buckets for profile images, cover photos, and portrait galleries

### Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Access Application**:
   - Main site: [http://localhost:3000](http://localhost:3000)
   - Admin dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)

### Admin Account Setup

1. Create a user account through Supabase Auth
2. Update the `user_profiles` table to set `is_admin = true` for your account
3. Access admin dashboard at `/admin/login`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard routes
│   ├── api/               # API endpoints
│   ├── card/              # Card profile display pages
│   ├── qr/                # QR code handling routes
│   ├── setup/             # Card setup workflows
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── admin/             # Admin-specific components
│   ├── auth/              # Authentication components
│   ├── ui/                # Reusable UI components
│   └── *.tsx              # Main page components
├── contexts/              # React context providers
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
│   ├── supabase.ts        # Database client configuration
│   ├── cardManagement.ts  # Card operations
│   └── qrCodeUtils.ts     # QR code generation
├── types/                 # TypeScript type definitions
├── utils/                 # Helper functions
└── store/                 # State management
```

### Key Directories

- **`/app`**: Next.js 15 App Router with nested layouts and route groups
- **`/components`**: Modular React components with Featured Icon design system
- **`/lib`**: Core business logic and external service integrations
- **`/types`**: Comprehensive TypeScript interfaces for type safety
- **`/admin`**: Complete admin dashboard with card management and analytics

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Environment Variables**: Add all `.env.local` variables to Vercel
3. **Deploy**: Automatic deployment on push to main branch

```bash
# Build command
npm run build

# Start command
npm run start
```

### Environment Variables for Production

```bash
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Database Migration for Production

1. Export schema from development Supabase project
2. Import to production Supabase project
3. Configure RLS policies and storage buckets
4. Update environment variables

## 🔐 Admin Access

### Admin Dashboard Features

The admin dashboard (`/admin`) provides comprehensive system management:

#### Card Management
- **Card Overview**: View all cards with status, type, and creation date
- **Bulk Operations**: Create multiple cards, update statuses, download QR codes
- **Print Tracking**: Monitor physical card production status
- **Card Details**: Individual card timeline and upgrade history

#### Analytics & Reporting
- **System Metrics**: Total cards, active users, revenue tracking
- **Card Statistics**: Distribution by type, configuration rates
- **Upgrade Analytics**: Revenue from card type upgrades
- **Usage Patterns**: QR scan frequency and user engagement

#### Pricing Management
- **Dynamic Pricing**: Update card prices and feature inclusions
- **Feature Management**: Add/remove features for each card type
- **Inclusion Editor**: Manage structured card inclusions with drag-and-drop

#### User Administration
- **User Profiles**: View and manage user accounts
- **Admin Logs**: Audit trail of all admin actions
- **Access Control**: Role-based permissions and security

### Admin Login Process

1. Navigate to `/admin/login`
2. Sign in with admin-enabled account
3. Access full dashboard functionality
4. All admin actions are logged for security

### Security Features

- **Row Level Security**: Database-level access control
- **Admin-Only Routes**: Protected admin interfaces
- **Audit Logging**: Complete action tracking
- **Session Management**: Secure authentication flows

## 🎨 Design System

Featured Icon uses a consistent color palette and design language:

- **Primary**: `#E6D9C4` (Warm beige)
- **Secondary**: `#AB7D7D` (Muted rose)
- **Background**: `#121212` (Deep black)
- **Typography**: Geist font family for modern readability

### Design Principles

- **Mobile-First**: Responsive design starting from mobile
- **Accessibility**: WCAG AA compliance with 4.5:1 contrast ratios
- **Minimalism**: Clean, professional aesthetic
- **Consistency**: Unified experience across all interfaces

## 📱 QR Code Workflow

### For End Users
1. **Receive Card**: Physical card with pre-printed QR code
2. **Scan Code**: Use smartphone camera to scan QR code
3. **Setup Profile**: Complete one-time profile configuration
4. **Share & Network**: QR code now displays professional profile

### For Administrators
1. **Create Cards**: Bulk generate cards with unique IDs
2. **Print Management**: Track physical card production
3. **Monitor Usage**: Analytics on scan rates and profile completion
4. **Support Users**: Help with setup and troubleshooting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper TypeScript types
4. Test thoroughly including mobile responsiveness
5. Submit a pull request with detailed description

## 📄 License

This project is proprietary software for Featured Icon business operations.

---

**Featured Icon** - Professional card templates for modern business networking.
