# Requirements.txt Installation Guide

This guide explains how to use the requirements.txt files for the AI Language Hub project.

## 📁 Available Requirements Files

### 1. `requirements.txt` - Comprehensive Version
- **Purpose**: Complete documentation with comments and version ranges
- **Use Case**: Understanding all dependencies and their purposes
- **Installation**: `npm install` (uses package.json directly)

### 2. `requirements-simple.txt` - Simplified Version
- **Purpose**: Clean list of package names without versions
- **Use Case**: Quick overview of all dependencies
- **Installation**: `npm install` (uses package.json directly)

### 3. `requirements-exact.txt` - Exact Version Version
- **Purpose**: Pinned versions for reproducible builds
- **Use Case**: Production deployments and CI/CD pipelines
- **Installation**: `npm install` (uses package.json directly)

## 🚀 Installation Methods

### Method 1: Standard npm install (Recommended)
```bash
# Install all dependencies (production + development)
npm install

# Install only production dependencies
npm install --production

# Install development dependencies
npm install --include=dev
```

### Method 2: Clean install
```bash
# Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install fresh dependencies
npm install
```

### Method 3: Using specific requirements file
```bash
# Note: npm uses package.json by default, but you can reference the requirements files for documentation
npm install
```

## 📋 Dependency Categories

### Core Framework (7 packages)
- `next`, `react`, `react-dom`, `typescript`, `tsx`
- **Purpose**: Core Next.js framework and TypeScript support

### UI & Styling (10 packages)
- `tailwindcss`, `lucide-react`, `clsx`, `framer-motion`, etc.
- **Purpose**: Modern UI framework and styling utilities

### Radix UI Components (22 packages)
- `@radix-ui/react-*` series
- **Purpose**: Accessible, unstyled UI components

### Forms & Validation (4 packages)
- `react-hook-form`, `zod`, etc.
- **Purpose**: Form handling and validation

### State Management (3 packages)
- `zustand`, `@tanstack/react-query`
- **Purpose**: Client and server state management

### AI & Voice Services (3 packages)
- `@elevenlabs/elevenlabs-js`, `z-ai-web-dev-sdk`
- **Purpose**: AI integration and voice synthesis

### Database (2 packages)
- `prisma`, `@prisma/client`
- **Purpose**: Database ORM and client

### Real-time (2 packages)
- `socket.io`, `socket.io-client`
- **Purpose**: WebSocket communication

### Utilities (15 packages)
- `axios`, `uuid`, `sonner`, etc.
- **Purpose**: Various utility libraries

### Development Dependencies (9 packages)
- `eslint`, `nodemon`, `@types/*`
- **Purpose**: Development tools and type definitions

## 🔧 System Requirements

### Node.js
- **Minimum Version**: 18.0.0
- **Recommended Version**: 20.0.0 or higher
- **Check Version**: `node --version`

### npm
- **Minimum Version**: 8.0.0
- **Recommended Version**: 10.0.0 or higher
- **Check Version**: `npm --version`

### Additional Requirements
- **Operating System**: Windows, macOS, or Linux
- **Memory**: Minimum 4GB RAM (8GB recommended)
- **Disk Space**: Minimum 1GB free space

## 🛠 Installation Steps

### Step 1: Prerequisites
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# If Node.js is not installed, download from https://nodejs.org/
```

### Step 2: Clone or Download Project
```bash
# If using git
git clone <your-repository-url>
cd ai-language-hub

# If downloading zip file, extract and navigate to project directory
```

### Step 3: Install Dependencies
```bash
# Standard installation
npm install

# This will install all dependencies from package.json
# The requirements.txt files serve as documentation
```

### Step 4: Environment Setup
```bash
# Copy environment template
cp .env.production.example .env

# Edit .env file with your actual values
# Required: ELEVENLABS_API_KEY, NEXTAUTH_SECRET, NEXTAUTH_URL
```

### Step 5: Build and Run
```bash
# Build the application
npm run build

# Start development server
npm run dev

# Or start production server
npm start
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Node.js Version Incompatible
```bash
# Error: "Node.js version X is not supported"
# Solution: Upgrade Node.js to version 18 or higher
nvm install 18
nvm use 18
```

#### 2. Permission Errors
```bash
# Error: "EACCES: permission denied"
# Solution: Fix npm permissions or use nvm
sudo chown -R $(whoami) ~/.npm
```

#### 3. Missing Dependencies
```bash
# Error: "Cannot find module 'package-name'"
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
```

#### 4. Sharp Installation Issues
```bash
# Error: Sharp compilation failed
# Solution: Install build tools
# Ubuntu/Debian:
sudo apt-get install build-essential libvips-dev

# macOS:
brew install vips

# Windows:
# Install Visual Studio Build Tools
```

#### 5. Socket.io Issues
```bash
# Error: WebSocket connection failed
# Solution: Check firewall and network settings
# Ensure port 3000 is open
```

### Verification Commands

```bash
# Check if all dependencies are installed
npm list --depth=0

# Check for security vulnerabilities
npm audit

# Run linting
npm run lint

# Build the application
npm run build
```

## 📊 Package Statistics

- **Total Dependencies**: 87 packages
- **Production Dependencies**: 78 packages
- **Development Dependencies**: 9 packages
- **Estimated Install Size**: ~200-300MB
- **Estimated Install Time**: 2-5 minutes (depending on internet speed)

## 🔄 Updating Dependencies

### Update All Dependencies
```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm update package-name
```

### Security Updates
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Fix vulnerabilities manually
npm audit fix --force
```

## 📝 Notes

- The requirements.txt files are for documentation purposes
- npm uses `package.json` and `package-lock.json` for actual dependency management
- Always use `npm install` for installing dependencies
- Pin versions in `package.json` for reproducible builds
- Regularly update dependencies for security patches
- Use `npm ci` for CI/CD environments for exact version matching

## 🆘 Support

If you encounter any issues during installation:

1. Check the troubleshooting section above
2. Ensure your system meets all requirements
3. Refer to the official documentation for each package
4. Check the project's GitHub issues page
5. Contact the development team for support

---

**Happy coding! 🚀**