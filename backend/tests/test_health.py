"""Tests for health and info endpoints."""

from app.main import app
from fastapi.testclient import TestClient

client = TestClient(app)


def test_health_returns_ok() -> None:
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["service"] == "careflow-ai-api"


def test_info_returns_metadata() -> None:
    response = client.get("/api/v1/info")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "CareFlow AI"
    assert data["version"] == "0.1.0"
    assert (
        "synthetic" in data["description"].lower() or "coordination" in data["description"].lower()
    )
