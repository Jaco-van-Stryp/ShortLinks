# syntax=docker/dockerfile:1

# Define the build stage for the .NET Core and Angular applications
FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build

# Install Node.js
RUN apk add --no-cache nodejs npm

# Copy the source code to the container
COPY . /source

# Change working directory to the Angular app location
WORKDIR /source/ShortLinks_Final/Shortlink

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install npm packages for Angular app
RUN npm install --fetch-timeout=300000 

# Build the Angular app, output will be automatically placed in 'wwwroot'
RUN ng build

# Change working directory back to the .NET app location
WORKDIR /source/ShortLinks_Final

# Set the architecture argument
ARG TARGETARCH

# Use cache for NuGet packages to speed up builds
RUN --mount=type=cache,id=nuget,target=/root/.nuget/packages \
    dotnet publish -a ${TARGETARCH/amd64/x64} --use-current-runtime --self-contained false -o /app

# Define the final stage for running the application
FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS final
WORKDIR /app

# Copy the published app from the build stage
COPY --from=build /app .

# Define the user to run the app under
ARG APP_UID
USER $APP_UID

# Set the entry point for the container
ENTRYPOINT ["dotnet", "ShortLinks_Final.dll"]
