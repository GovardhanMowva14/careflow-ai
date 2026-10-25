"""Health and application metadata services."""

from app.core.config import Settings
from app.models.schemas import AppInfoResponse, HealthResponse

SERVICE_NAME = "careflow-ai-api"


def get_health() -> HealthResponse:
    return HealthResponse(status="ok", service=SERVICE_NAME)


def get_app_info(settings: Settings) -> AppInfoResponse:
    return AppInfoResponse(
        name=settings.app_name,
        version=settings.app_version,
        description=settings.app_description,
    )
