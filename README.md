# E-commerce Platform (Shopify-like Architecture)

A full-stack e-commerce platform built with modern technologies, mimicking Shopify's architecture.

## Architecture

### Backend
- **Framework**: Ruby on Rails (Modular Monolith)
- **Components**: Inventory, Billing, Identity (isolated engines)
- **Database**: PostgreSQL with sharding support
- **Containerization**: Docker

### Frontend
- **Framework**: React + Vite
- **UI Library**: Shopify Polaris
- **Configuration**: Hydrogen-ready (mock config included)

### Infrastructure
- **Orchestration**: Kubernetes
- **Caching**: Redis
- **Scaling**: Database sharding with multiple pods

## Project Structure

```
ecommerce-platform/
├── backend/              # Rails Modular Monolith
│   ├── app/
│   │   └── components/   # Isolated engines
│   │       ├── inventory/
│   │       ├── billing/
│   │       └── identity/
│   ├── config/
│   │   └── database.yml  # Sharding configuration
│   └── Dockerfile
├── frontend/             # React + Polaris
│   ├── src/
│   │   └── App.tsx       # Main storefront UI
│   ├── dist/             # Build output
│   ├── netlify.toml      # Netlify config
│   └── shopify.config.js # Hydrogen config
└── infrastructure/       # K8s manifests
    └── k8s/
        ├── deployment.yaml
        ├── service.yaml
        ├── redis.yaml
        └── sharding-config.yaml
```

## Getting Started

### Frontend Development

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

### Netlify (Frontend)

1. **Via Netlify CLI**:
   ```bash
   cd frontend
   npx netlify-cli deploy --prod --dir=dist
   ```

2. **Via Netlify Web UI**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings are already configured in `netlify.toml`

### Kubernetes (Backend)

Apply the manifests:
```bash
kubectl apply -f infrastructure/k8s/
```

## Next Steps

1. **Backend**: Install Ruby and Rails to develop the backend logic
2. **Frontend**: Expand Polaris UI and connect to real Shopify Storefront API
3. **Infrastructure**: Configure actual database shards and deploy to a K8s cluster

## Technologies

- Ruby on Rails
- React
- Shopify Polaris
- Shopify Hydrogen (config)
- Kubernetes
- Redis
- PostgreSQL
- Docker
- Netlify

## Deployment Status

✅ **GitHub Repository**: [https://github.com/ktobz/ecommerce-platform](https://github.com/ktobz/ecommerce-platform)  
🚀 **Netlify**: Configured and ready to deploy
