# webpack-compiler-csharp-net-core

🔧 A boilerplate project demonstrating how to integrate **Webpack** with **ASP.NET Core (.NET 8)** using modern JavaScript tooling powered by `pnpm`.

## 🚀 Features

- Webpack + ASP.NET Core (.NET 8)
- Production & development builds
- Modern JavaScript project structure with `pnpm`
- Clean folder organization for full-stack development

---

## 📦 Prerequisites

Make sure the following are installed on your system:

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js (LTS)](https://nodejs.org/)
- [pnpm](https://pnpm.io/)  
  To install `pnpm`, run:
  ```bash
  npm install -g pnpm

# 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/TysonGerber/webpack-compiler-csharp-net-core.git
cd webpack-compiler-csharp-net-core
```

### 2. Restore .NET Dependencies

```bash
dotnet restore
```

### 3. Install JavaScript Dependencies with pnpm

```bash
cd webpackFinishedBoilerPlate
pnpm install
```

# 🔧 Development Workflow

### 1. Build Webpack Assets

In the `webpackFinishedBoilerPlate` directory:

```bash
pnpm build
```

This compiles the frontend assets and places them into the `wwwroot` folder.

### 2. Run the ASP.NET Core Backend

Back at the root directory:

```bash
dotnet run
```

Your site will be available at:

```text
https://localhost:5001
```

# 🏗️ Production Build

To prepare for deployment:

### Build frontend assets:

```bash
pnpm build
```

### Publish the .NET app:

```bash
dotnet publish -c Release
```

This will generate the complete output in:

```bash
bin/Release/net8.0/publish/
```

# 📁 Folder Structure

```bash
webpack-compiler-csharp-net-core/
├── webpackFinishedBoilerPlate/   # JS + Webpack
│   ├── package.json
│   ├── webpack.config.js
│   └── src/
├── Controllers/                  # ASP.NET MVC controllers
├── Views/                        # Razor views
├── wwwroot/                      # Compiled frontend static files
├── *.csproj
└── README.md
```

# 🧪 Scripts (via pnpm)

```bash
pnpm build     # Build frontend assets for production
```

# 🤝 Contributing

Pull requests are welcome! Fork this repo, make changes, and open a PR.

# 📄 License

MIT

---

Need help customizing Webpack, configuring deployment, or adding Tailwind/React/Vue? Open an issue or ask away 🔨🤖

