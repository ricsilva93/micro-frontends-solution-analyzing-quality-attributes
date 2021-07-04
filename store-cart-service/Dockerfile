#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["store-cart-service/store-cart-service.csproj", "store-cart-service/"]
RUN dotnet restore "store-cart-service/store-cart-service.csproj"
COPY . .
WORKDIR "/src/store-cart-service"
RUN dotnet build "store-cart-service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "store-cart-service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "store-cart-service.dll"]