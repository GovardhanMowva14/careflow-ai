"""API response schemas."""

from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str = Field(..., examples=["ok"])
    service: str = Field(..., examples=["careflow-ai-api"])


class AppInfoResponse(BaseModel):
    name: str
    version: str
    description: str
