"""Health and info API endpoints."""

from fastapi import APIRouter

from app.core.config import settings
from app.models.schemas import AppInfoResponse, HealthResponse
from app.services.health import get_app_info, get_health

router = APIRouter(tags=["system"])


@router.get("/health", response_model=HealthResponse)
def health_check() -> HealthResponse:
    return get_health()


@router.get("/info", response_model=AppInfoResponse)
def app_info() -> AppInfoResponse:
    return get_app_info(settings)
